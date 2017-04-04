import java.util.Map;
import java.util.HashMap;

public final class DNA {
  private final String strand;
  private static final String validNucleotides = "AGCT";

  public DNA(String strand){
    this.strand = strand;
  }

  public Integer count(char nucleobase){
    Integer count = 0;

    if (validNucleotides.indexOf(nucleobase) == -1) {
      throw new IllegalArgumentException();
    }

    for (char c : strand.toCharArray()) {
      if (c == nucleobase) {
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
