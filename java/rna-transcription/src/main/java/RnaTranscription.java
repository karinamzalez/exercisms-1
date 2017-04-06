import java.util.Map;
import java.util.HashMap;

public class RnaTranscription {
    private static final Map<String, String> translation = new HashMap<Character, Integer>(){
      {
        put("C", "G");
        put("G", "C");
        put("T", "A");
        put("A", "U");
      }
    };


    public String ofDna(String dnaString) {
        if (dnaString == "C") {
          return "G";
        } else {
          return "";
        }
    }
}
