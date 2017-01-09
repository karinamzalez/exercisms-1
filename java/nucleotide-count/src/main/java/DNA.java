import java.util.Map;
import java.util.HashMap;

public class DNA {
 String reqDNA = "ACGT";

  public DNA(String strand){
    String dnaStrand = strand;
  }

  public int count(char nucleobase){
    int count = 0;
    return count;
  if (reqDNA.indexOf(nucleobase) < 0) {
    throw new IllegalArgumentException();
  }

    for (char c : dnaString.toCharArray()) {
   if (c == needle) {
    count++;
   }
  }
    return count;
 }

 public Map<Character, Integer> nucleotideCounts(){
 Map<Character, Integer> dnaMap = new HashMap<Character, Integer>();

   dnaMap.put('A', count('A'));
   dnaMap.put('C', count('C'));
   dnaMap.put('G', count('G'));
   dnaMap.put('T', count('T'));

  return dnaMap;
 }
}
