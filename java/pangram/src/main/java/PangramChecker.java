public class PangramChecker {
    private static StringBuilder alphabet = new StringBuilder("abcdefghijklmnopqrstuvwxyz");

    public boolean isPangram(String input) {
      if (input.length() == 0) {
        return false;
      }

      for (String letter : input.split("")) {
        int letterIndex = alphabet.indexOf(letter);
        updateAlphabet(letterIndex);
      }
      println alphabet;
      return alphabet.equals(null) || alphabet.equals("") ? true : false;
    }

    private StringBuilder updateAlphabet(int letterIndex) {
      return letterIndex >= 0 ? alphabet.deleteCharAt(letterIndex) : alphabet;
    }
}
