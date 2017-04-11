import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class Etl {
    public Map<String, Integer> transform(Map<Integer, List<String>> old) {
      Map<String, Integer> transformed = new HashMap<String, Integer>();
      for (Entry<Integer, List<String>> entry : old.entrySet()) {
        int points = entry.getKey();
        for (String oldLetter : entry.getValue()) {
          String letter = oldLetter.toLowerCase();
          transformed.put(letter, points);
        }
      }
      return transformed;
    }
}
