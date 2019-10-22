package backend.backendee.models;

import java.util.HashMap;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "candidates")
public class Candidates {
  @Id
  public ObjectId _id;
 
  public String name;
  public HashMap<String, String> views;
 
  // Constructors
  public Candidates() {}
 
  public Candidates(ObjectId _id, String name, HashMap<String, String> views) {
    this._id = _id;
    this.name = name;
    this.views = views;
  }
 
  // ObjectId needs to be converted to string
  public String get_id() { return _id.toHexString(); }
  public void set_id(ObjectId _id) { this._id = _id; }
 
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
 
  public HashMap<String, String> getViews(){ return views; }
  public void setViews(HashMap<String, String> views){ this.views = views; }

  public String getViewOn(String issue){ return views.get(issue); }
  public void setViewOn(String issue, String stance ){ views.put(issue, stance); }

}