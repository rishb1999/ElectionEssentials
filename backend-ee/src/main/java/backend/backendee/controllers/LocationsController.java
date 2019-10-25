package backend.backendee.controllers;

import backend.backendee.models.Locations;
import backend.backendee.repositories.LocationsRepository;
import org.bson.types.ObjectId;
//import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping(value = "/locations")
public class LocationsController {
    @Autowired
    private LocationsRepository repository;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Locations> getAllLocations() { return repository.findAll(); }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifyLocationsById(@PathVariable("id") ObjectId id, @Valid @RequestBody Locations locations) {
        locations.set_id(id);
        repository.save(locations);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Locations createLocation(@Valid @RequestBody Locations locations) {
        locations.set_id(ObjectId.get());
        repository.save(locations);
        return locations;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteLocations(@PathVariable ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

    @RequestMapping(value = "/{address}", method = RequestMethod.GET)
    public List<Locations> getLocationInformation(@PathVariable("address") String address) {
        List<Locations> addresses = new ArrayList<Locations>();
        String key = "AIzaSyAxjoIRnvdnptgtzIdQvnDeM-rnviFq-D0";
        String uri = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + address + "&key=" + key; 
        RestTemplate restTemplate = new RestTemplate();
        String result = "";
        try {
            result = restTemplate.getForObject(uri, String.class);
        }catch(Exception e) {
            addresses.add(new Locations(ObjectId.get(), "ERROR: BAD REQUEST", "ERROR: BAD REQUEST"));
            return addresses;
        }
        result = result.substring(result.indexOf("\"pollingLocations\": ["), result.indexOf("\"state\": ["));
        String [] lines = result.split("\n");
        for(int x = 0; x < lines.length; x++) {
            if(lines[x].contains("\"address\"")) {
                String [] name = lines[x+1].split(":");
                String n = name[1].substring(name[1].indexOf("\""));
                String locName = n.substring(1,n.length()-2);
                System.out.println(locName);
                String addr = "";
                for(int y = 2; y <= 4; y++) {
                    String [] a = lines[x+y].split(":");
                    n = a[1].substring(a[1].indexOf("\""));
                    addr += n.substring(1,n.length()-2) + ",";
                }
                String [] zip = lines[x+5].split(":");
                String z = zip[1].substring(zip[1].indexOf("\""));
                addr += z.substring(1,z.length()-1);
                System.out.println(addr);
                Locations loc = new Locations(ObjectId.get(), locName, addr);
                addresses.add(loc);
                if(noDuplicate(addr) == true) {
                    repository.save(loc);
                }
            }
        }
        //clearList();
        return addresses;
    }

    private boolean noDuplicate(String address) {
        List<Locations> locs = repository.findAll();
        for(Locations l: locs) {
            if(l.getAddress().equals(address)) {
                return false;
            }
        }
        return true;
    }

    private void clearList() {
        List<Locations> locs = repository.findAll();
        for(Locations l: locs) {
            repository.delete(repository.findBy_id(l.getId()));
        }
    }

}