import java.util.Map;
import java.util.HashMap;

public class RnaTranscription {
    private static final Map<String, String> translation = new HashMap<String, String>(){
      {
        put("C", "G");
        put("G", "C");
        put("T", "A");
        put("A", "U");
      };
    };


  public String ofDna(String dnaString) {
    String rna = "";
    for (Map.Entry<String, String> entry : translation.entrySet()) {
      String key = entry.getKey();
      String value = entry.getValue();

      if (key == dnaString) {
        rna = value;
      }
    };
    return rna;
  }
}
