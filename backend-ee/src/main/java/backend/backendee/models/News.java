package backend.backendee.models;

import java.util.HashMap;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "news")
public class News {
    @Id
    public ObjectId _id;

    public List<String> articles;


    public News(){}

}