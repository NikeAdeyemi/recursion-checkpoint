Function: isPalindrome
Input: word
Output: True if word is a palindrome, False otherwise

Step 1: Clean the input
  a. Remove spaces and punctuation from the word
  b. (Optional) Convert all characters to lowercase

Step 2: Check for Palindrome
  a. If the length of the cleaned word is 0 or 1, return True (stop condition)

  b. If the first and last characters of the cleaned word are equal:
      i. Remove the first and last characters from the word.
      ii. Recursively check the remaining word for palindrome.

  c. If the first and last characters are not equal, return False.

Example (pseudo-code):
isPalindrome(word):
  if length(word) <= 1:
    return True
  if first_character(word) == last_character(word):
    return isPalindrome(remove_first_and_last_characters(word))
  else:
    return False
    