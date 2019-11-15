import unittest
import time
from selenium import webdriver
from selenium.webdriver.support.select import Select

class SearchText(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        # create a new Firefox session
        inst.browser = webdriver.Chrome('/usr/local/bin/chromedriver')
        time.sleep(2)
        inst.browser.maximize_window()
        # navigate to the application home page
        inst.browser.get('http://ee461l-election-essentials.appspot.com/')

    #Test Case 1 - Search for Candidate Profile (Bernie Sanders)
    def test_search_candidate_profile1(self):
        # get the search textbox
        self.browser.get('http://ee461l-election-essentials.appspot.com/candidates.html')
        self.search_field = self.browser.find_element_by_id('tmAbout-search')
        self.search_field.clear()
        self.search_field.send_keys("Bernie Sanders")
        go = self.browser.find_element_by_id('go')
        go.click()
        time.sleep(2)
        result = self.browser.find_element_by_id('name_result')
        self.assertEqual("Bernie Sanders", result.text)

    #Test Case 2 - Search for Candidate Profile (Elizabeth Warren)
    def test_search_candidate_profile2(self):
        self.browser.get('http://ee461l-election-essentials.appspot.com/candidates.html')
        self.search_field = self.browser.find_element_by_id('tmAbout-search')
        self.search_field.clear()
        self.search_field.send_keys("Elizabeth Warren")
        go = self.browser.find_element_by_id('go')
        go.click()
        time.sleep(2)
        result = self.browser.find_element_by_id('name_result')
        self.assertEqual("Elizabeth Warren", result.text)

#    def test_create_user(self):
 #       self.browser.get('http://ee461l-election-essentials.appspot.com/youraccount.html')
  #      self.fName = self.browser.find_element_by_id('firstName')
   #     self.lName = self.browser.find_element_by_id('lastName')
    #    self.email = self.browser.find_element_by_id('email')
     #   self.userName = self.browser.find_element_by_id('username')
     #   self.password = self.browser.find_element_by_id('password')
     #   self.confPass = self.browser.find_element_by_id('confirmPassword')
     #   self.fName.clear()
     #   self.fName.send_keys("FirstName")
     #   self.lName.clear()
     #   self.lName.send_keys("LastName")
     #   self.email.clear()
     #   self.email.send_keys("test@google.com")
     #   self.userName.clear()
     #   self.userName.send_keys('selenium')
     #   self.password.clear()
     #   self.password.send_keys('washere')
     #   self.confPass.clear()
     #   self.confPass.send_keys('washere')
        #to be continued

    #Test Case 3 - Login with already made account
    def test_login_user(self):
        self.browser.get("http://ee461l-election-essentials.appspot.com/login.html")
        user = self.browser.find_element_by_id('username')
        password = self.browser.find_element_by_id('password')
        user.send_keys('joshie')
        password.send_keys('josh')
        go = self.browser.find_element_by_id('login')
        go.click()
        time.sleep(2)
        

    #Test Case 4 - Create an Account
    def test_create_account(self):
        self.browser.get("http://ee461l-election-essentials.appspot.com/youraccount.html")
        user = self.browser.find_element_by_id('username')
        password = self.browser.find_element_by_id('password')
        #confirmpassword = self.browser.find_element_by_id('confirmPassword')
        user.send_keys('nathanleba')
        password.send_keys('nathanleba')
        #confirmpassword.send_keys('nathanleba')
        go = self.browser.find_element_by_id('login')
        go.click()
       
        

    #Test Case 5 - Invalid Login
    def test_invalid_login(self):
        self.browser.get("http://ee461l-election-essentials.appspot.com/login.html")
        user = self.browser.find_element_by_id('username')
        password = self.browser.find_element_by_id('password')
        user.send_keys('WRONG USERNAME')
        password.send_keys('WRONGPASSWORD')
        go = self.browser.find_element_by_id('login')
        go.click()
        time.sleep(2)
        #Switch the control to the Alert window
        obj = self.browser.switch_to.alert
        
        #Retrieve the message on the Alert window
        msg=obj.text
        obj.accept()
        self.assertEqual('INVALID USERNAME', msg)  
    
    #Test Case 6 - Test News
    def test_news(self):
        self.browser.get("http://ee461l-election-essentials.appspot.com/trendingnews.html")
        selectnews = self.browser.find_element_by_id('news-select')
        selectnews.click()
        time.sleep(2)
        gonews = self.browser.find_element_by_id('click')
        gonews.click()
        time.sleep(2)
       

    #Test Case 7 - Create an Account that has already been made
    def test_create_already_made_account(self):
        self.browser.get("http://ee461l-election-essentials.appspot.com/youraccount.html")
        user = self.browser.find_element_by_id('username')
        password = self.browser.find_element_by_id('password')
        confirmpassword = self.browser.find_element_by_id('confirmPassword')
        user.send_keys('w')
        password.send_keys('w')
        confirmpassword.send_keys('w')
        go = self.browser.find_element_by_id('login')
        go.click()
        time.sleep(2)
        #Switch the control to the Alert window
        obj = self.browser.switch_to.alert
        
        #Retrieve the message on the Alert window
        msg=obj.text
        obj.accept()
        self.assertNotEquals('success',msg)

    #Test Case 8 - Political Alignment
    def test_political_alignment(self):
        self.browser.get("http://ee461l-election-essentials.appspot.com/politicalalignmentquiz.html")
        select_fr = Select(self.browser.find_element_by_id("criminal&justice"))
        select_fr.select_by_index(0)
        go5=self.browser.find_element_by_id("confirm")
        go5.click()
        time.sleep(2)

    #Test Case 9 - Issues Economy Page
    def test_issues_economy_page(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/trendingissues.html")
        # self.browser.find_element_by_xpath('//[img/@src="/img/Education.svg"]').click()  
         self.browser.find_element_by_link_text('Economy').click() 
         time.sleep(2)
    
    #Test Case 10 - Issues Military Page
    def test_issues_military_page(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/trendingissues.html")
        # self.browser.find_element_by_xpath('//[img/@src="/img/Education.svg"]').click()  
         self.browser.find_element_by_link_text('Military').click() 
         time.sleep(2)

    #Test Case 11 - Issues technology Page
    def test_issues_technology_page(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/trendingissues.html")
        # self.browser.find_element_by_xpath('//[img/@src="/img/Education.svg"]').click()  
         self.browser.find_element_by_link_text('Technology').click() 
         time.sleep(2)

    #Test Case 12 - Locations Page
    def test_issues_locations_page(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/voterlocation.html")
         user = self.browser.find_element_by_id('searchInput')
         user.send_keys('1909 Rio Grande Street, Austin, Texas, 78705')
         go = self.browser.find_element_by_id('go')
         go.click()
         time.sleep(2)
         

    #Test Case 13 - Voter Info Page 1
    def test_issues_info_page(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/voterinformation.html")
         go = self.browser.find_element_by_id('All')
         go.click()
         time.sleep(2)
         go1 = self.browser.find_element_by_id('PE')
         go1.click()
         time.sleep(2)
    
    #Test Case 14 - Voter Info Page 2
    def test_issues_info_page2(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/voterinformation.html")
         go = self.browser.find_element_by_id('PE')
         go.click()
         time.sleep(2)
         go1 = self.browser.find_element_by_id('UE')
         go1.click()
         time.sleep(2)
         

    #Test Case 15 - Voter Info Page 2
    def test_issues_info_page3(self):
         self.browser.get("http://ee461l-election-essentials.appspot.com/voterinformation.html")
         go = self.browser.find_element_by_id('PR')
         go.click()
         time.sleep(2)
         go1 = self.browser.find_element_by_id('UEL')
         go1.click()
         time.sleep(2)

    
         
 
    
    

    @classmethod
    def tearDownClass(inst):
        # close the browser window
        inst.browser.quit()

if __name__ == '__main__':
    unittest.main()


