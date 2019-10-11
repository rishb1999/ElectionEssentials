var events = [
  {'Date': new Date(2019, 8, 10), 'Title': '(Primary Election) First day to file for a place on the Primary Ballot for precinct chair candidates'},
  {'Date': new Date(2019, 10, 9), 'Title': '(Primary Election) First day to file for all other candidates for offices that are regularly scheduled to be on the Primary ballot; first day for independent candidates to file declaration of intent', 'Link': 'nytimes.com'},
  {'Date': new Date(2019, 11, 9), 'Title': '(Primary Election) Filing deadline for candidates; filing deadline for independent candidates to file declaration of intent.'},
  {'Date': new Date(2020, 0, 1), 'Title': '(Primary/Uniform (Limited)/Primary Runoff/Uniform Election) First day to apply for a ballot by mail using Application for a Ballot by Mail (ABBM) or Federal Postcard Application (FPCA).'},
  {'Date': new Date(2020, 1, 3), 'Title': '(Primary Election) Last Day to Register to Vote'},
  {'Date': new Date(2020, 1, 18), 'Title': '(Primary Election) First Day of Early Voting. Last Day to File a Declaration of Write-in Candidacy (Local Political Subdivisions Only).'},
  {'Date': new Date(2020, 1, 21), 'Title': '(Primary Election) Last Day to Apply for Ballot by Mail (Received, not Postmarked)'},
  {'Date': new Date(2020, 1, 28), 'Title': '(Primary Election) Last Day of Early Voting'},
  {'Date': new Date(2020, 2, 3), 'Title': '(Primary Election) Last day to Receive Ballot by Mail'},

  {'Date': new Date(2019, 8, 1), 'Title': '(Uniform Election (Limited)) Deadline to post NEW HB 305 notice'},
  {'Date': new Date(2019, 11, 16), 'Title': '(Uniform Election (Limited)) Deadline to Post Notice of Candidate Filing Deadline (Local Political Subdivisions Only)'},
  {'Date': new Date(2020, 0, 15), 'Title': '(Uniform Election (Limited)) First Day to File for a Place on the General Election Ballot (Local Political Subdivisions Only)'},
  {'Date': new Date(2020, 1, 14), 'Title': '(Uniform Election (Limited)) Last Day to Order General Election or Special Election on a Measure. Last Day to File for a Place on the General Election Ballot (Local Political Subdivisions Only).'},
  {'Date': new Date(2020, 3, 2), 'Title': '(Uniform Election (Limited)) Last Day to Register to Vote'},
  {'Date': new Date(2020, 3, 20), 'Title': '(Uniform Election (Limited)) First Day of Early Voting by Personal Appearance. Last Day to Apply for Ballot by Mail (Received, not Postmarked).'},
  {'Date': new Date(2020, 3, 28), 'Title': '(Uniform Election (Limited)) Last Day of Early Voting by Personal Appearance'},
  {'Date': new Date(2020, 4, 2), 'Title': '(Uniform Election (Limited)) Last day to Receive Ballot by Mail'},

  {'Date': new Date(2020, 3, 27), 'Title': '(Primary Runoff) Last Day to Register to Vote'},
  {'Date': new Date(2020, 4, 18), 'Title': '(Primary Runoff) First Day of Early Voting'},
  {'Date': new Date(2020, 4, 15), 'Title': '(Primary Runoff) Last Day to Apply by Mail (Received, not Postmarked)'},
  {'Date': new Date(2020, 4, 22), 'Title': '(Primary Runoff) Last Day of Early Voting'},
  {'Date': new Date(2020, 4, 26), 'Title': '(Primary Runoff) Last Day to Receive Ballot by Mail'},

  {'Date': new Date(2019, 10, 3), 'Title': '(Uniform Election) Deadline to post NEW HB 305 notice.'},
  {'Date': new Date(2020, 5, 18), 'Title': '(Uniform Election) Deadline to Post Notice of Candidate Filing Deadline (Local Political Subdivisions Only). First Day to File a Declaration of Write-in Candidacy (General Election for State and County Officers).'},
  {'Date': new Date(2020, 7, 17), 'Title': '(Uniform Election) Last Day to Order General Election or Special Election on a Measure. Last Day to File for a Place on the General Election Ballot (Local Political Subdivisions Only). Last Day to File a Declaration of Write-in Candidacy (General Election for State and County Officers). '},
  {'Date': new Date(2020, 7, 21), 'Title': '(Uniform Election) Last Day to File a Declaration of Write-in Candidacy (Local Political Subdivisions Only).'},
  {'Date': new Date(2020, 8, 5), 'Title': '(Uniform Election) Last Day to Register to Vote'},
  {'Date': new Date(2020, 8, 19), 'Title': '(Uniform Election) First Day of Early Voting by Personal Appearance'},
  {'Date': new Date(2020, 8, 23), 'Title': '(Uniform Election) Last Day to Apply for Ballot by Mail (Received, not Postmarked)'},
  {'Date': new Date(2020, 8, 30), 'Title': '(Uniform Election) Last Day of Early Voting by Personal Appearance'},
  {'Date': new Date(2020, 10, 3), 'Title': '(Uniform Election) Last day to Receive Ballot by Mail'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
