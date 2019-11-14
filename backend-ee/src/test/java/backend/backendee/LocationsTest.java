package backend.backendee;

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
public class LocationsTest {

    private LocationsController controllerUnderTest;

    @Mock
    private LocationsRepository repository;
    
    @Mock
    Locations location = new Locations();

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(LocationsController.class);
        MockitoAnnotations.initMocks(this);
        controllerUnderTest = new LocationsController(repository);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
	@Test
    public void getAllLocationsTest() {
    	
  
        Mockito.when(repository.findAll()).thenReturn(null);
    	List<Locations> locations = controllerUnderTest.getAllLocations();
        
        assertNull(locations);
        
       
    }

    @Test
    public void createLocationTest() {
        
       // Locations locations = new Locations();

        ArgumentCaptor<Locations> captor = ArgumentCaptor.forClass(Locations.class);

      //  Mockito.when(controllerUnderTest.createLocation(location)).thenReturn(location);
        controllerUnderTest.createLocation(location);

       // Mockito.verify(locations, Mockito.times(1)).set_id((ObjectId) any(Object.class));
        Mockito.verify(location, Mockito.times(1)).set_id((ObjectId) any(Object.class));
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(location, captor.getValue());
    }

    @Test
    public void modifyLocationsByIdTest(){
        
       // Locations locations = new Locations();

        ArgumentCaptor<Locations> captor = ArgumentCaptor.forClass(Locations.class);

        controllerUnderTest.createLocation(location);

        Mockito.verify(location, Mockito.times(1)).set_id((ObjectId) any(Object.class));
        Mockito.verify(repository, Mockito.times(1)).save(captor.capture());

        assertEquals(location, captor.getValue());
    }

    @Test
    public void deleteLocationTest(){
        Mockito.when(repository.findAll()).thenReturn(null);

        List<Locations> locations = controllerUnderTest.getAllLocations();
        controllerUnderTest.deleteLocations((ObjectId) any(Object.class));

        assertNull(locations);
    }  
}
