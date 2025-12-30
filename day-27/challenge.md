# Day 27: Title Case String

## Problem
Convert a string to title case, where the first letter of each word is capitalized and the rest are lowercase. However, keep certain small words (like "a", "an", "the", "and", "but", "or") lowercase unless they're the first word.

## Examples
```javascript
titleCase("the quick brown fox")           // "The Quick Brown Fox"
titleCase("a tale of two cities")          // "A Tale of Two Cities"
titleCase("the lord of the rings")         // "The Lord of the Rings"
titleCase("WORLD WAR II")                  // "World War II"
titleCase("to be or not to be")            // "To Be or Not to Be"
```

## Small Words to Keep Lowercase
["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "in", "of"]

## Rules
- First word is always capitalized
- Small words are lowercase (unless first word)
- All other words are capitalized