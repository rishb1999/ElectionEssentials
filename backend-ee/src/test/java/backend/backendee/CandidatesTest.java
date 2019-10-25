import static org.mockito.Mockito.*;

import backend.backendee.models.Candidates;
import backend.backendee.repositories.CandidatesRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;

import backend.backendee.controllers.CandidatesController;


//////// Remember to add this inside the actual controller class
public class CandidatesController {
    @Autowired
    private CandidatesRepository repository;

    @VisibleForTesting
    public CandidatesController(CandidatesRepository repo) {
        this.repository = repo;
    }

}



public class CandidatesControllerTest {

    private CandidatesController controllerUnderTest;

    @Mock
    private CandidatesRepository repository;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(CandidatesController.class)
        controllerUnderTest = new CandidatesController(repository);
    }

    public void getAllCandidatesTest() {
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Candidates> candidates = controllerUnderTest.getAllCandidates();

        assertEquals(candidates, null);
    }

    public void createCandidateTest() {
        @Mock 
        Candidates candidates;

        ArgumentCaptor<Candidates> captor = ArgumentCaptor.forClass(Candidates.class);

        controllerUnderTest.createCandidate(candidates);

        Mockito.verify(candidates, Mockito.times(1)).set_id(Mockito.anyInt());
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(candidates, captor.getValue());
    }

    public void getCandidateIDTest(){
        @Mock
        Candidates candidates;

        ArgumentCaptor<Candidates> captor = ArgumentCaptor.forClass(Candidates.class);

        controlller.underTest.createCandidate(candidates);

        Mockito.verify(candidates, Mockito.times(1)).findBy_id(Mockito.anyInt());
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(canidates, captor.getValue());
    }

    public void modifyCandidateTest(){
        @Mock
        Candidates candidates;

        ArgumentCaptor<Candidates> captor = ArgumentCaptor.forClass(Candidates.class);

        controlller.underTest.createCandidate(candidates);

        Mockito.verify(candidates, Mockito.times(1)).set_id(Mockito.anyInt());
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(canidates, captor.getValue());
    }

    public void deleteCandidateTest(){
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Candidates> candidates = controllerUnderTest.getAllCandidates();
        controllerUnderTest.deleteCandidates(Mockito.anyInt());

        assertEquals(candidates, null);
    }

    



    

}