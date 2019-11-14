package backend.backendee;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import backend.backendee.models.*;
import backend.backendee.repositories.CandidatesRepository;
import backend.backendee.repositories.LocationsRepository;
import org.mockito.junit.MockitoJUnitRunner;

import org.bson.types.ObjectId;
import org.junit.*;
import org.junit.runner.RunWith;
import org.mockito.*;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;
import static org.junit.Assert.*;

import backend.backendee.controllers.*;


@RunWith(MockitoJUnitRunner.class)

public class CandidatesTest {

    private CandidatesController controllerUnderTest;

    @Mock
    private CandidatesRepository repository;
    
    @Mock
    Candidates candidates = new Candidates();

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(CandidatesController.class);
        MockitoAnnotations.initMocks(this);
        controllerUnderTest = new CandidatesController(repository);
    }

    @Test
    public void getAllCandidatesTest() {
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Candidates> Listcandidates = controllerUnderTest.getAllCandidates();

        assertEquals(Listcandidates, null);
    }

    @Test
    public void createCandidateTest() {
 

        ArgumentCaptor<Candidates> captor = ArgumentCaptor.forClass(Candidates.class);

        controllerUnderTest.createCandidate(candidates);

        Mockito.verify(candidates, Mockito.times(1)).set_id((ObjectId) any(Object.class));
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(candidates, captor.getValue());
    }

    @Test
    public void modifyCandidateTest(){
      

        ArgumentCaptor<Candidates> captor = ArgumentCaptor.forClass(Candidates.class);

        controllerUnderTest.createCandidate(candidates);

        Mockito.verify(candidates, Mockito.times(1)).set_id((ObjectId) any(Object.class));
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(candidates, captor.getValue());
    }

    @Test
    public void deleteCandidateTest(){
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Candidates> candidates = controllerUnderTest.getAllCandidates();
        controllerUnderTest.deleteCandidates((ObjectId) any(Object.class));

        assertEquals(candidates, null);
    }
}

