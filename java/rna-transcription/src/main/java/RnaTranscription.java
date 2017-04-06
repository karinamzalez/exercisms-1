public class RnaTranscription {
  public static String ofDna(String dnaString) {
    String rna = "";
    for (String nucleobase : dnaString.split("")) {
      rna += translateNucleobase(nucleobase);
    }
    return rna;
  }

  private static String translateNucleobase(String nucleobase) {
    switch (nucleobase) {
      case "C" : return "G";
      case "G" : return "C";
      case "T" : return "A";
      case "A" : return "U";
      default: return "";
    }
  }
}
