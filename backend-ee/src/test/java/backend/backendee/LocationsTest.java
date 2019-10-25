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
public class LocationsController {
    @Autowired
    private LocationsRepository repository;

    @VisibleForTesting
    public LocationsController(LocationsRepository repo) {
        this.repository = repo;
    }

}



public class LocationsControllerTest {

    private LocationsController controllerUnderTest;

    @Mock
    private LocationsRepository repository;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(LocationsController.class)
        controllerUnderTest = new LocationsController(repository);
    }

    public void getAllLocationsTest() {
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Locations> locations = controllerUnderTest.getAllLocations();

        assertEquals(locations, null);
    }

    public void createLocationTest() {
        @Mock 
        Locations locations;

        ArgumentCaptor<Locations> captor = ArgumentCaptor.forClass(Locations.class);

        controllerUnderTest.createLocation(locations);

        Mockito.verify(locations, Mockito.times(1)).set_id(Mockito.anyInt());
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(locations, captor.getValue());
    }

    public void modifyLocationsByIdTest(){
        @Mock
        Locations locations;

        ArgumentCaptor<Candidates> captor = ArgumentCaptor.forClass(Locations.class);

        controlller.underTest.createLocation(locations);

        Mockito.verify(locations, Mockito.times(1)).set_id(Mockito.anyInt());
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(locations, captor.getValue());
    }

    public void deleteLocationTest(){
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Candidates> candidates = controllerUnderTest.getAllLocations();
        contolerUnderTest.deleteLocations(Mockito.anyInt());

        assertEquals(candidates, null);
    }

    



    

}