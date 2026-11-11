# Kata Roadmap

A NeetCode-style path built only from Codewars katas. Work tier by tier, top
to bottom. Inside a tier, take the tracks in the listed order; inside a track,
katas are sorted by rank, easiest first. Katas harder than the current tier
are parked under a "Later" line and come back in the tier they belong to.
Checked boxes are already solved in this repo.

Links are Codewars searches by exact title, so they survive kata renames and
slug changes. Unmarked ranks were checked on Codewars or are well known;
`~` marks ones still unverified that may be off by one.
Language availability varies per kata: filter the search by language.

## Map

```text
Tier 1  8-7 kyu
  Warmup
   |
   v
Tier 2  6 kyu
  Strings & Arrays  <- Warmup
  Hashing & Counting  <- Strings & Arrays
  Math & Number Theory  <- Warmup
  Bit Manipulation  <- Math & Number Theory
  Regex  <- Strings & Arrays
   |
   v
Tier 3  5 kyu
  Sorting, Two Pointers & Windows  <- Strings & Arrays, Hashing & Counting
  Stack & Parsing  <- Strings & Arrays
  Linked Lists  <- Strings & Arrays
  Recursion & Backtracking  <- Strings & Arrays
  Functional & Language Features  <- Recursion & Backtracking
  + Later parts of: Strings & Arrays, Hashing & Counting,
                    Math & Number Theory, Bit Manipulation, Regex
   |
   v
Tier 4  4 kyu
  Matrix & Simulation  <- Strings & Arrays
  Trees & Heaps  <- Recursion & Backtracking, Linked Lists
  Intervals & Greedy  <- Sorting, Two Pointers & Windows
  Dynamic Programming  <- Math & Number Theory, Recursion & Backtracking
  Graphs  <- Matrix & Simulation, Trees & Heaps
  Big Numbers & Performance  <- Math & Number Theory
  + Later parts of: Hashing & Counting, Math & Number Theory,
                    Bit Manipulation, Regex, Stack & Parsing,
                    Recursion & Backtracking, Functional & Language Features
   |
   v
Tier 5  3-1 kyu
  Interpreters & Compilers  <- Stack & Parsing, Regex
  Capstones  <- Graphs, Dynamic Programming, Big Numbers & Performance,
                Interpreters & Compilers
  + Later parts of: Stack & Parsing, Recursion & Backtracking,
                    Matrix & Simulation, Dynamic Programming, Graphs,
                    Big Numbers & Performance
```

`A <- B` means finish the in-tier part of B before starting A.

## Progress

| Tier | Track | kyu | Solved |
|------|-------|-----|--------|
| 1 | [Warmup](#warmup) | 8-7 | 17/24 |
| 2 | [Strings & Arrays](#strings--arrays) | 7-5 | 10/21 |
| 2 | [Hashing & Counting](#hashing--counting) | 7-4 | 7/17 |
| 2 | [Math & Number Theory](#math--number-theory) | 7-4 | 11/25 |
| 2 | [Bit Manipulation](#bit-manipulation) | 7-4 | 0/7 |
| 2 | [Regex](#regex) | 7-4 | 3/6 |
| 3 | [Sorting, Two Pointers & Windows](#sorting-two-pointers--windows) | 7-5 | 6/12 |
| 3 | [Stack & Parsing](#stack--parsing) | 6-2 | 2/8 |
| 3 | [Linked Lists](#linked-lists) | 7-5 | 0/11 |
| 3 | [Recursion & Backtracking](#recursion--backtracking) | 6-3 | 1/10 |
| 3 | [Functional & Language Features](#functional--language-features) | 6-4 | 2/7 |
| 4 | [Matrix & Simulation](#matrix--simulation) | 7-3 | 0/11 |
| 4 | [Trees & Heaps](#trees--heaps) | 7-4 | 0/7 |
| 4 | [Intervals & Greedy](#intervals--greedy) | 6-4 | 0/6 |
| 4 | [Dynamic Programming](#dynamic-programming) | 6-3 | 0/8 |
| 4 | [Graphs](#graphs) | 4-2 | 0/7 |
| 4 | [Big Numbers & Performance](#big-numbers--performance) | 4-2 | 1/8 |
| 5 | [Interpreters & Compilers](#interpreters--compilers) | 7-1 | 0/13 |
| 5 | [Capstones](#capstones) | 2-1 | 0/5 |
| | **Total** | | **60/213** |

## Rules

- Timebox: 30 min at 6 kyu, 60 min at 4 kyu. Stuck past that, write down the
  blocker, read one hint (discourse tab), retry the next day.
- After every solve read the top Best Practices and Clever solutions and keep
  the idea as a `# clever` / `# bp` comment, as already done in `python/`.
- A tier is done when the last kata of each of its tracks falls without hints.
  Do not finish every warmup kata; move on once the pattern is automatic.
- From Tier 3 up, re-solve one kata per track in C or Rust.
- Revisit: any kata that took more than one attempt goes back on the list a
  week later, solved from a blank file.

## Warmup

Tier 1, 8-7 kyu. Language fluency: loops, strings, comprehensions. Skip ahead once these are boring.

- [x] [Even or Odd](https://www.codewars.com/kata/search?q=Even+or+Odd) `8` ([even_or_odd.nim](nim/even_or_odd.nim))
- [x] [Square(n) Sum](https://www.codewars.com/kata/search?q=Square%28n%29+Sum) `8` ([squaresum.py](python/squaresum.py), [squaresum.ts](typescript/src/codewars/squaresum.ts))
- [x] [Is the string uppercase?](https://www.codewars.com/kata/search?q=Is+the+string+uppercase%3F) `8` ([str_is_all_upper.py](python/str_is_all_upper.py))
- [x] [altERnaTIng cAsE <=> ALTerNAtiNG CaSe](https://www.codewars.com/kata/search?q=altERnaTIng+cAsE+%3C%3D%3E+ALTerNAtiNG+CaSe) `8` ([alternating_case.py](python/alternating_case.py), [alternating_case.rs](rust/src/alternating_case.rs))
- [x] [Filter out the geese](https://www.codewars.com/kata/search?q=Filter+out+the+geese) `8` ([filter_geese.py](python/filter_geese.py))
- [x] [A Needle in the Haystack](https://www.codewars.com/kata/search?q=A+Needle+in+the+Haystack) `8` ([needle_in_the_haystack.py](python/needle_in_the_haystack.py))
- [x] [Cat years, Dog years](https://www.codewars.com/kata/search?q=Cat+years%2C+Dog+years) `8` ([cat_dog_years.py](python/cat_dog_years.py))
- [x] [L1: Set Alarm](https://www.codewars.com/kata/search?q=L1%3A+Set+Alarm) `8` ([l1_set_alarm.py](python/l1_set_alarm.py))
- [x] [Boiled Eggs](https://www.codewars.com/kata/search?q=Boiled+Eggs) `8` ([boiledeggs.py](python/boiledeggs.py), [boiledeggs.js](javascript/boiledeggs.js))
- [x] [Correct the mistakes of the character recognition software](https://www.codewars.com/kata/search?q=Correct+the+mistakes+of+the+character+recognition+software) `8` ([charrec0gn50ftm15t.js](javascript/charrec0gn50ftm15t.js))
- [ ] [Fake Binary](https://www.codewars.com/kata/search?q=Fake+Binary) `8` map over chars
- [x] [Friend or Foe?](https://www.codewars.com/kata/search?q=Friend+or+Foe%3F) `7` ([friend_or_foe.py](python/friend_or_foe.py))
- [x] [Find the capitals](https://www.codewars.com/kata/search?q=Find+the+capitals) `7` ([find_the_capitals.py](python/find_the_capitals.py))
- [x] [Vowel Count](https://www.codewars.com/kata/search?q=Vowel+Count) `7` ([vowelcount.py](python/vowelcount.py))
- [x] [Highest and Lowest](https://www.codewars.com/kata/search?q=Highest+and+Lowest) `7` ([highest_and_lowest.py](python/highest_and_lowest.py))
- [x] [Square Every Digit](https://www.codewars.com/kata/search?q=Square+Every+Digit) `7` ([squareeverydigits.js](javascript/squareeverydigits.js))
- [x] [Isograms](https://www.codewars.com/kata/search?q=Isograms) `7` ([isograms.js](javascript/isograms.js))
- [x] [Printer Errors](https://www.codewars.com/kata/search?q=Printer+Errors) `7` ([printer_errors.py](python/printer_errors.py))
- [ ] [Disemvowel Trolls](https://www.codewars.com/kata/search?q=Disemvowel+Trolls) `7` filter / regex
- [ ] [Descending Order](https://www.codewars.com/kata/search?q=Descending+Order) `7` digits -> sort -> join
- [ ] [Get the Middle Character](https://www.codewars.com/kata/search?q=Get+the+Middle+Character) `7` index math
- [ ] [Jaden Casing Strings](https://www.codewars.com/kata/search?q=Jaden+Casing+Strings) `7` split/map/join
- [ ] [Mumbling](https://www.codewars.com/kata/search?q=Mumbling) `7` enumerate + repeat
- [ ] [Complementary DNA](https://www.codewars.com/kata/search?q=Complementary+DNA) `7` translation table

## Strings & Arrays

Tier 2, 7-5 kyu. Split/join, slicing, index arithmetic, building output strings. Needs: Warmup.

- [x] [Credit Card Mask](https://www.codewars.com/kata/search?q=Credit+Card+Mask) `7` ([credit_card_mask.js](javascript/credit_card_mask.js))
- [x] [Monotone travel](https://www.codewars.com/kata/search?q=Monotone+travel) `7` ([monotone_travel.py](python/monotone_travel.py))
- [x] [Stop gninnipS My sdroW!](https://www.codewars.com/kata/search?q=Stop+gninnipS+My+sdroW%21) `6` ([stopspinwords.js](javascript/stopspinwords.js))
- [x] [Convert string to camel case](https://www.codewars.com/kata/search?q=Convert+string+to+camel+case) `6` ([convert_str2camelCase.js](javascript/convert_str2camelCase.js))
- [x] [Create Phone Number](https://www.codewars.com/kata/search?q=Create+Phone+Number) `6` ([create_phn_num.js](javascript/create_phn_num.js))
- [x] [Dubstep](https://www.codewars.com/kata/search?q=Dubstep) `6` ([dubstep.js](javascript/dubstep.js))
- [x] [Title Case](https://www.codewars.com/kata/search?q=Title+Case) `6` ([title_case.py](python/title_case.py))
- [x] [Equal Sides Of An Array](https://www.codewars.com/kata/search?q=Equal+Sides+Of+An+Array) `6` prefix sums ([equal_sides.js](javascript/equal_sides.js))
- [ ] [Mexican Wave](https://www.codewars.com/kata/search?q=Mexican+Wave) `6` slice + upper per index
- [ ] [Break camelCase](https://www.codewars.com/kata/search?q=Break+camelCase) `6` scan or regex
- [ ] [Replace With Alphabet Position](https://www.codewars.com/kata/search?q=Replace+With+Alphabet+Position) `6` ord arithmetic
- [ ] [Split Strings](https://www.codewars.com/kata/search?q=Split+Strings) `6` pad then chunk
- [ ] [Who likes it?](https://www.codewars.com/kata/search?q=Who+likes+it%3F) `6` case table
- [ ] [Build Tower](https://www.codewars.com/kata/search?q=Build+Tower) `6` centered padding
- [ ] [Write Number in Expanded Form](https://www.codewars.com/kata/search?q=Write+Number+in+Expanded+Form) `6` digit by place value
- [ ] [Find The Parity Outlier](https://www.codewars.com/kata/search?q=Find+The+Parity+Outlier) `6` look at first 3
- [ ] [Find the missing letter](https://www.codewars.com/kata/search?q=Find+the+missing+letter) `6` consecutive ord
- [ ] [Take a Ten Minute Walk](https://www.codewars.com/kata/search?q=Take+a+Ten+Minute+Walk) `6` count opposing moves

Later, in Tier 3:

- [x] [Rot13](https://www.codewars.com/kata/search?q=Rot13) `5` ([rot13.js](javascript/rot13.js), [rot_13.py](python/rot_13.py))
- [x] [RGB To Hex Conversion](https://www.codewars.com/kata/search?q=RGB+To+Hex+Conversion) `5` ([rgb2hex.js](javascript/rgb2hex.js))
- [ ] [Simple Pig Latin](https://www.codewars.com/kata/search?q=Simple+Pig+Latin) `5`

## Hashing & Counting

Tier 2, 7-4 kyu. Counters, sets, dict-of-lists, canonical keys. Needs: Strings & Arrays.

- [x] [Is this an anagram?](https://www.codewars.com/kata/search?q=Is+this+an+anagram%3F) `7` ([is_anagram.py](python/is_anagram.py))
- [x] [Find the odd int](https://www.codewars.com/kata/search?q=Find+the+odd+int) `6` ([find_odd_int.js](javascript/find_odd_int.js))
- [x] [Counting Duplicates](https://www.codewars.com/kata/search?q=Counting+Duplicates) `6` ([count_duplicates.py](python/count_duplicates.py))
- [x] [Array.diff](https://www.codewars.com/kata/search?q=Array.diff) `6` ([array_diff.py](python/array_diff.py))
- [x] [Are they the "same"?](https://www.codewars.com/kata/search?q=Are+they+the+%22same%22%3F) `6` ([aretheythesame.js](javascript/aretheythesame.js))
- [ ] [Duplicate Encoder](https://www.codewars.com/kata/search?q=Duplicate+Encoder) `6` Counter
- [ ] [Detect Pangram](https://www.codewars.com/kata/search?q=Detect+Pangram) `6` set difference
- [ ] [Unique In Order](https://www.codewars.com/kata/search?q=Unique+In+Order) `6` groupby
- [ ] [Two Sum](https://www.codewars.com/kata/search?q=Two+Sum) `6` seen-map, one pass
- [ ] [Count the smiley faces!](https://www.codewars.com/kata/search?q=Count+the+smiley+faces%21) `6`
- [ ] [Delete occurrences of an element if it occurs more than n times](https://www.codewars.com/kata/search?q=Delete+occurrences+of+an+element+if+it+occurs+more+than+n+times) `6` running count

Later, in Tier 3:

- [x] [Where my anagrams at?](https://www.codewars.com/kata/search?q=Where+my+anagrams+at%3F) `5` ([where_my_anagrams_at.js](javascript/where_my_anagrams_at.js))
- [x] [Pete, the baker](https://www.codewars.com/kata/search?q=Pete%2C+the+baker) `5` ([petethebaker.js](javascript/petethebaker.js))
- [ ] [Scramblies](https://www.codewars.com/kata/search?q=Scramblies) `5` Counter subtraction
- [ ] [Greed is Good](https://www.codewars.com/kata/search?q=Greed+is+Good) `5`
- [ ] [First non-repeating character](https://www.codewars.com/kata/search?q=First+non-repeating+character) `5` ordered count, case folding

Later, in Tier 4:

- [ ] [Strings Mix](https://www.codewars.com/kata/search?q=Strings+Mix) `4` two counters, custom sort key

## Math & Number Theory

Tier 2, 7-4 kyu. Digit manipulation, divisors, primes, closed forms, modular tricks. Needs: Warmup.

- [x] [Beginner Series #3 Sum of Numbers](https://www.codewars.com/kata/search?q=Beginner+Series+%233+Sum+of+Numbers) `7` ([bs3_sum_of_nums.js](javascript/bs3_sum_of_nums.js))
- [x] [Sum of odd numbers](https://www.codewars.com/kata/search?q=Sum+of+odd+numbers) `7` ([sumofoddnum.js](javascript/sumofoddnum.js))
- [x] [Find the divisors!](https://www.codewars.com/kata/search?q=Find+the+divisors%21) `7` ([finddivisors.js](javascript/finddivisors.js))
- [x] [Growth of a Population](https://www.codewars.com/kata/search?q=Growth+of+a+Population) `7` ([growthofpopul.js](javascript/growthofpopul.js))
- [x] [Palindrome chain length](https://www.codewars.com/kata/search?q=Palindrome+chain+length) `7` ([palindrome_chain_lng.js](javascript/palindrome_chain_lng.js))
- [x] [Multiples of 3 or 5](https://www.codewars.com/kata/search?q=Multiples+of+3+or+5) `6` ([multiples_of_3or5.js](javascript/multiples_of_3or5.js))
- [x] [Sum of Digits / Digital Root](https://www.codewars.com/kata/search?q=Sum+of+Digits+%2F+Digital+Root) `6` ([digital_root.js](javascript/digital_root.js))
- [x] [Does my number look big in this?](https://www.codewars.com/kata/search?q=Does+my+number+look+big+in+this%3F) `6` ([narcissisticnum.js](javascript/narcissisticnum.js))
- [x] [Bouncing Balls](https://www.codewars.com/kata/search?q=Bouncing+Balls) `6` ([bouncing_ball.py](python/bouncing_ball.py))
- [x] [Roman Numerals Encoder](https://www.codewars.com/kata/search?q=Roman+Numerals+Encoder) `6` ([roman_nums_enc.js](javascript/roman_nums_enc.js))
- [ ] [Persistent Bugger.](https://www.codewars.com/kata/search?q=Persistent+Bugger.) `6`
- [ ] [Roman Numerals Decoder](https://www.codewars.com/kata/search?q=Roman+Numerals+Decoder) `6` subtractive pairs
- [ ] [Is a number prime?](https://www.codewars.com/kata/search?q=Is+a+number+prime%3F) `6` trial division to sqrt
- [ ] [Playing with digits](https://www.codewars.com/kata/search?q=Playing+with+digits) `6`
- [ ] [Build a pile of Cubes](https://www.codewars.com/kata/search?q=Build+a+pile+of+Cubes) `6` closed form or loop

Later, in Tier 3:

- [x] [Mean Square Error](https://www.codewars.com/kata/search?q=Mean+Square+Error) `5` ([mean_square_error.py](python/mean_square_error.py))
- [ ] [Human Readable Time](https://www.codewars.com/kata/search?q=Human+Readable+Time) `5` divmod
- [ ] [Number of trailing zeros of N!](https://www.codewars.com/kata/search?q=Number+of+trailing+zeros+of+N%21) `5` Legendre: count 5s
- [ ] [Product of consecutive Fib numbers](https://www.codewars.com/kata/search?q=Product+of+consecutive+Fib+numbers) `5`
- [ ] [Primes in numbers](https://www.codewars.com/kata/search?q=Primes+in+numbers) `5` factorization
- [ ] [Josephus Survivor](https://www.codewars.com/kata/search?q=Josephus+Survivor) `5` recurrence
- [ ] [Last digit of a large number](https://www.codewars.com/kata/search?q=Last+digit+of+a+large+number) `5` modpow cycles

Later, in Tier 4:

- [ ] [Human readable duration format](https://www.codewars.com/kata/search?q=Human+readable+duration+format) `4` unit table + joining
- [ ] [Sum by Factors](https://www.codewars.com/kata/search?q=Sum+by+Factors) `4`
- [ ] [Number of Proper Fractions with Denominator d](https://www.codewars.com/kata/search?q=Number+of+Proper+Fractions+with+Denominator+d) `4` Euler totient

## Bit Manipulation

Tier 2, 7-4 kyu. Masks, shifts, popcount, XOR identities. Needs: Math & Number Theory.

- [ ] [Ones and Zeros](https://www.codewars.com/kata/search?q=Ones+and+Zeros) `7` fold bits
- [ ] [Bit Counting](https://www.codewars.com/kata/search?q=Bit+Counting) `6` popcount
- [ ] [Binary to Text (ASCII) Conversion](https://www.codewars.com/kata/search?q=Binary+to+Text+%28ASCII%29+Conversion) `6` 8-bit chunks
- [ ] [IPv4 to int32](https://www.codewars.com/kata/search?q=IPv4+to+int32) `6` shift and or

Later, in Tier 3:

- [ ] [int32 to IPv4](https://www.codewars.com/kata/search?q=int32+to+IPv4) `5` mask and shift
- [ ] [Count IP Addresses](https://www.codewars.com/kata/search?q=Count+IP+Addresses) `5`

Later, in Tier 4:

- [ ] [Count ones in a segment](https://www.codewars.com/kata/search?q=Count+ones+in+a+segment) `4` count per bit position, closed form

## Regex

Tier 2, 7-4 kyu. Anchors, lookaheads, groups, re.sub with callbacks. Very Codewars. Needs: Strings & Arrays.

- [x] [Regex validate PIN code](https://www.codewars.com/kata/search?q=Regex+validate+PIN+code) `7` ([pin_validate.py](python/pin_validate.py))
- [ ] [Valid Phone Number](https://www.codewars.com/kata/search?q=Valid+Phone+Number) `6`

Later, in Tier 3:

- [x] [Extract the domain name from a URL](https://www.codewars.com/kata/search?q=Extract+the+domain+name+from+a+URL) `5` ([extract_domain_from_url.py](python/extract_domain_from_url.py))
- [x] [Regex Password Validation](https://www.codewars.com/kata/search?q=Regex+Password+Validation) `5` ([regexpasswvalidation.js](javascript/regexpasswvalidation.js))
- [ ] [Not very secure](https://www.codewars.com/kata/search?q=Not+very+secure) `5`

Later, in Tier 4:

- [ ] [Regular Expression for Binary Numbers Divisible by 3](https://www.codewars.com/kata/search?q=Regular+Expression+for+Binary+Numbers+Divisible+by+3) `4` DFA -> regex

## Sorting, Two Pointers & Windows

Tier 3, 7-5 kyu. Custom sort keys, single scans with state, early exit. Needs: Strings & Arrays, Hashing & Counting.

- [x] [Sort Numbers](https://www.codewars.com/kata/search?q=Sort+Numbers) `7` ([sort_nums.py](python/sort_nums.py))
- [x] [Sum of two lowest positive integers](https://www.codewars.com/kata/search?q=Sum+of+two+lowest+positive+integers) `7` ([sumof2low_pos_int.js](javascript/sumof2low_pos_int.js))
- [x] [Your order, please](https://www.codewars.com/kata/search?q=Your+order%2C+please) `6` ([yourorder.js](javascript/yourorder.js))
- [ ] [Sort the odd](https://www.codewars.com/kata/search?q=Sort+the+odd) `6` sort subset, refill in place
- [ ] [Highest Scoring Word](https://www.codewars.com/kata/search?q=Highest+Scoring+Word) `6` max with key
- [ ] [Consecutive strings](https://www.codewars.com/kata/search?q=Consecutive+strings) `6` fixed-size window
- [ ] [Character with longest consecutive repetition](https://www.codewars.com/kata/search?q=Character+with+longest+consecutive+repetition) `6` run-length scan
- [x] [Weight for weight](https://www.codewars.com/kata/search?q=Weight+for+weight) `5` ([weight4weight.js](javascript/weight4weight.js))
- [x] [Moving Zeros To The End](https://www.codewars.com/kata/search?q=Moving+Zeros+To+The+End) `5` ([moving_0_2the_end.js](javascript/moving_0_2the_end.js))
- [x] [Maximum subarray sum](https://www.codewars.com/kata/search?q=Maximum+subarray+sum) `5` Kadane ([maxsubarrsum.js](javascript/maxsubarrsum.js))
- [ ] [Pick peaks](https://www.codewars.com/kata/search?q=Pick+peaks) `5` plateau tracking
- [ ] [Sum of Pairs](https://www.codewars.com/kata/search?q=Sum+of+Pairs) `5` seen-set, earliest second index; perf tests

## Stack & Parsing

Tier 3, 6-2 kyu. Matching, reduction, operator precedence, tokenizing. Needs: Strings & Arrays.

- [ ] [Valid Braces](https://www.codewars.com/kata/search?q=Valid+Braces) `6` stack of openers
- [x] [Reverse polish notation calculator](https://www.codewars.com/kata/search?q=Reverse+polish+notation+calculator) `6` ([reverse_polish_notation.js](javascript/reverse_polish_notation.js))
- [ ] [Valid Parentheses](https://www.codewars.com/kata/search?q=Valid+Parentheses) `5` counter
- [ ] [Directions Reduction](https://www.codewars.com/kata/search?q=Directions+Reduction) `5` cancel against top of stack
- [ ] [Molecule to atoms](https://www.codewars.com/kata/search?q=Molecule+to+atoms) `5` nested multipliers

Later, in Tier 4:

- [x] [Strip Comments](https://www.codewars.com/kata/search?q=Strip+Comments) `4` ([strip_comments.py](python/strip_comments.py))

Later, in Tier 5:

- [ ] [Calculator](https://www.codewars.com/kata/search?q=Calculator) `3` shunting-yard or recursive descent
- [ ] [Evaluate mathematical expression](https://www.codewars.com/kata/search?q=Evaluate+mathematical+expression) `2` recursive descent, unary minus

## Linked Lists

Tier 3, 7-5 kyu. The "Linked Lists - ..." series, sorted by rank like every track; C/Rust make this real. Needs: Strings & Arrays.

- [ ] [Linked Lists - Push & BuildOneTwoThree](https://www.codewars.com/kata/search?q=Linked+Lists+Push+%26+BuildOneTwoThree) `~7`
- [ ] [Linked Lists - Length & Count](https://www.codewars.com/kata/search?q=Linked+Lists+Length+%26+Count) `~7`
- [ ] [Linked Lists - Get Nth Node](https://www.codewars.com/kata/search?q=Linked+Lists+Get+Nth+Node) `7`
- [ ] [Linked Lists - Insert Nth Node](https://www.codewars.com/kata/search?q=Linked+Lists+Insert+Nth+Node) `~6`
- [ ] [Linked Lists - Sorted Insert](https://www.codewars.com/kata/search?q=Linked+Lists+Sorted+Insert) `~6`
- [ ] [Linked Lists - Remove Duplicates](https://www.codewars.com/kata/search?q=Linked+Lists+Remove+Duplicates) `6`
- [ ] [Linked Lists - Sorted Merge](https://www.codewars.com/kata/search?q=Linked+Lists+Sorted+Merge) `6`
- [ ] [Linked Lists - Merge Sort](https://www.codewars.com/kata/search?q=Linked+Lists+Merge+Sort) `6` needs a front/back split: do Front Back Split first if stuck
- [ ] [Linked Lists - Recursive Reverse](https://www.codewars.com/kata/search?q=Linked+Lists+Recursive+Reverse) `6`
- [ ] [Linked Lists - Front Back Split](https://www.codewars.com/kata/search?q=Linked+Lists+Front+Back+Split) `5` slow/fast pointers
- [ ] [Can you get the loop ?](https://www.codewars.com/kata/search?q=Can+you+get+the+loop+%3F) `5` Floyd cycle detection

## Recursion & Backtracking

Tier 3, 6-3 kyu. Recursive structure, generate-and-prune, constraint checks. Needs: Strings & Arrays.

- [ ] [Simple Encryption #1 - Alternating Split](https://www.codewars.com/kata/search?q=Simple+Encryption+%231+Alternating+Split) `6`
- [ ] [Did I Finish my Sudoku?](https://www.codewars.com/kata/search?q=Did+I+Finish+my+Sudoku%3F) `5`

Later, in Tier 4:

- [x] [Nesting Structure Comparison](https://www.codewars.com/kata/search?q=Nesting+Structure+Comparison) `4` ([neststructcomp.js](javascript/neststructcomp.js))
- [ ] [So Many Permutations!](https://www.codewars.com/kata/search?q=So+Many+Permutations%21) `4` dedupe permutations
- [ ] [The observed PIN](https://www.codewars.com/kata/search?q=The+observed+PIN) `4` cartesian product
- [ ] [Next bigger number with the same digits](https://www.codewars.com/kata/search?q=Next+bigger+number+with+the+same+digits) `4` next permutation
- [ ] [Sudoku Solution Validator](https://www.codewars.com/kata/search?q=Sudoku+Solution+Validator) `4`
- [ ] [4 By 4 Skyscrapers](https://www.codewars.com/kata/search?q=4+By+4+Skyscrapers) `4` permutation filtering

Later, in Tier 5:

- [ ] [Sudoku Solver](https://www.codewars.com/kata/search?q=Sudoku+Solver) `3` backtracking
- [ ] [Screen Locking Patterns](https://www.codewars.com/kata/search?q=Screen+Locking+Patterns) `3` DFS with skip rules

## Functional & Language Features

Tier 3, 6-4 kyu. Closures, currying, proxies, chaining. Mostly JS/Python flavored. Needs: Recursion & Backtracking.

- [ ] [Function Composition](https://www.codewars.com/kata/search?q=Function+Composition) `~6`
- [ ] [Unary function chainer](https://www.codewars.com/kata/search?q=Unary+function+chainer) `~6`
- [x] [Calculating with Functions](https://www.codewars.com/kata/search?q=Calculating+with+Functions) `5` ([calc_with_fn.js](javascript/calc_with_fn.js))
- [ ] [A Chain adding function](https://www.codewars.com/kata/search?q=A+Chain+adding+function) `5` callable that is also a number
- [ ] [Memoized Fibonacci](https://www.codewars.com/kata/search?q=Memoized+Fibonacci) `5` cache closure

Later, in Tier 4:

- [x] [Priori Incantatem](https://www.codewars.com/kata/search?q=Priori+Incantatem) `4` redo it so you understand the Proxy ([priori_incantatem.js](javascript/priori_incantatem.js))
- [ ] [Currying vs. Partial Application](https://www.codewars.com/kata/search?q=Currying+vs.+Partial+Application) `~4`

## Matrix & Simulation

Tier 4, 7-3 kyu. Grid traversal, rotation, state machines. Codewars loves these. Needs: Strings & Arrays.

- [ ] [Coloured Triangles](https://www.codewars.com/kata/search?q=Coloured+Triangles) `7` brute force first
- [ ] [Tic-Tac-Toe Checker](https://www.codewars.com/kata/search?q=Tic-Tac-Toe+Checker) `5`
- [ ] [Land perimeter](https://www.codewars.com/kata/search?q=Land+perimeter) `5`
- [ ] [Snail](https://www.codewars.com/kata/search?q=Snail) `4` peel row, rotate
- [ ] [Conway's Game of Life - Unlimited Edition](https://www.codewars.com/kata/search?q=Conway%27s+Game+of+Life+Unlimited+Edition) `4` grow and crop
- [ ] [Connect Four](https://www.codewars.com/kata/search?q=Connect+Four) `4`
- [ ] [Matrix Determinant](https://www.codewars.com/kata/search?q=Matrix+Determinant) `4` Laplace expansion

Later, in Tier 5:

- [ ] [Make a spiral](https://www.codewars.com/kata/search?q=Make+a+spiral) `3`
- [ ] [Battleship field validator](https://www.codewars.com/kata/search?q=Battleship+field+validator) `3`
- [ ] [Rail Fence Cipher: Encoding and Decoding](https://www.codewars.com/kata/search?q=Rail+Fence+Cipher%3A+Encoding+and+Decoding) `3`
- [ ] [The Lift](https://www.codewars.com/kata/search?q=The+Lift) `3` careful state machine

## Trees & Heaps

Tier 4, 7-4 kyu. Traversals, BFS by level, priority queues. Needs: Recursion & Backtracking, Linked Lists.

- [ ] [Fun with trees: max sum](https://www.codewars.com/kata/search?q=Fun+with+trees%3A+max+sum) `~7`
- [ ] [Binary Tree Traversal](https://www.codewars.com/kata/search?q=Binary+Tree+Traversal) `~6` pre/in/post order
- [ ] [The Supermarket Queue](https://www.codewars.com/kata/search?q=The+Supermarket+Queue) `6` min-heap of tills
- [ ] [Fun with trees: is perfect](https://www.codewars.com/kata/search?q=Fun+with+trees%3A+is+perfect) `~5`
- [ ] [Sort binary tree by levels](https://www.codewars.com/kata/search?q=Sort+binary+tree+by+levels) `4` BFS
- [ ] [Twice linear](https://www.codewars.com/kata/search?q=Twice+linear) `4` two pointers or heap
- [ ] [Hamming Numbers](https://www.codewars.com/kata/search?q=Hamming+Numbers) `4` three pointers / heap

## Intervals & Greedy

Tier 4, 6-4 kyu. Sort then sweep, merge ranges, local choices. Needs: Sorting, Two Pointers & Windows.

- [ ] [Vasya - Clerk](https://www.codewars.com/kata/search?q=Vasya+Clerk) `6`
- [ ] [Best travel](https://www.codewars.com/kata/search?q=Best+travel) `5` combinations + max
- [ ] [Find the smallest](https://www.codewars.com/kata/search?q=Find+the+smallest) `5`
- [ ] [Range Extraction](https://www.codewars.com/kata/search?q=Range+Extraction) `4` group runs
- [ ] [Sum of Intervals](https://www.codewars.com/kata/search?q=Sum+of+Intervals) `4` sort + merge, perf tests
- [ ] [Square into Squares. Protect trees!](https://www.codewars.com/kata/search?q=Square+into+Squares.+Protect+trees%21) `4` greedy + backtrack

## Dynamic Programming

Tier 4, 6-3 kyu. Memo -> tabulation, partitions, path sums. Needs: Math & Number Theory, Recursion & Backtracking.

- [ ] [Fibonacci, Tribonacci and friends](https://www.codewars.com/kata/search?q=Fibonacci%2C+Tribonacci+and+friends) `6`
- [ ] [Pascal's Triangle](https://www.codewars.com/kata/search?q=Pascal%27s+Triangle) `6`
- [ ] [Longest Common Subsequence](https://www.codewars.com/kata/search?q=Longest+Common+Subsequence) `5`
- [ ] [Pyramid Slide Down](https://www.codewars.com/kata/search?q=Pyramid+Slide+Down) `4` bottom-up
- [ ] [Counting Change Combinations](https://www.codewars.com/kata/search?q=Counting+Change+Combinations) `4` unbounded knapsack count
- [ ] [Explosive Sum](https://www.codewars.com/kata/search?q=Explosive+Sum) `4` integer partitions
- [ ] [Getting along with Integer Partitions](https://www.codewars.com/kata/search?q=Getting+along+with+Integer+Partitions) `4`

Later, in Tier 5:

- [ ] [Faberge Easter Eggs crush test](https://www.codewars.com/kata/search?q=Faberge+Easter+Eggs+crush+test) `3` binomial DP, big ints

## Graphs

Tier 4, 4-2 kyu. BFS/DFS on grids and implicit graphs, Dijkstra, topo sort. Needs: Matrix & Simulation, Trees & Heaps.

- [ ] [Path Finder #1: can you reach the exit?](https://www.codewars.com/kata/search?q=Path+Finder+%231%3A+can+you+reach+the+exit%3F) `4` BFS/DFS
- [ ] [Path Finder #2: shortest path](https://www.codewars.com/kata/search?q=Path+Finder+%232%3A+shortest+path) `4` BFS
- [ ] [Shortest Knight Path](https://www.codewars.com/kata/search?q=Shortest+Knight+Path) `4` BFS on implicit graph
- [ ] [Recover a secret string from random triplets](https://www.codewars.com/kata/search?q=Recover+a+secret+string+from+random+triplets) `4` topological sort
- [ ] [Path Finder #4: where are you?](https://www.codewars.com/kata/search?q=Path+Finder+%234%3A+where+are+you%3F) `4` simulation

Later, in Tier 5:

- [ ] [Path Finder #3: the Alpinist](https://www.codewars.com/kata/search?q=Path+Finder+%233%3A+the+Alpinist) `3` Dijkstra
- [ ] [Blaine is a pain](https://www.codewars.com/kata/search?q=Blaine+is+a+pain) `2` graph simulation

## Big Numbers & Performance

Tier 4, 4-2 kyu. Schoolbook arithmetic on strings, fast exponentiation, sieves. Needs: Math & Number Theory.

- [x] [Sum Strings as Numbers](https://www.codewars.com/kata/search?q=Sum+Strings+as+Numbers) `4` ([sumstrasnum.js](javascript/sumstrasnum.js))
- [ ] [Adding Big Numbers](https://www.codewars.com/kata/search?q=Adding+Big+Numbers) `4`
- [ ] [Multiplying numbers as strings](https://www.codewars.com/kata/search?q=Multiplying+numbers+as+strings) `4`
- [ ] [Large Factorials](https://www.codewars.com/kata/search?q=Large+Factorials) `4`

Later, in Tier 5:

- [ ] [Last digit of a huge number](https://www.codewars.com/kata/search?q=Last+digit+of+a+huge+number) `3` power tower mod 4/20
- [ ] [The Millionth Fibonacci Kata](https://www.codewars.com/kata/search?q=The+Millionth+Fibonacci+Kata) `3` fast doubling / matrix power
- [ ] [Prime Streaming (PG-13)](https://www.codewars.com/kata/search?q=Prime+Streaming+%28PG-13%29) `3` segmented sieve
- [ ] [Insane Coloured Triangles](https://www.codewars.com/kata/search?q=Insane+Coloured+Triangles) `2` Lucas theorem, base 3

## Interpreters & Compilers

Tier 5, 7-1 kyu. The Codewars signature track. Tokenize, parse, execute. Needs: Stack & Parsing, Regex.

- [ ] [Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck)](https://www.codewars.com/kata/search?q=Esolang+Interpreters+%231+Introduction+to+Esolangs+and+My+First+Interpreter+%28MiniStringFuck%29) `7`
- [ ] [Decode the Morse code](https://www.codewars.com/kata/search?q=Decode+the+Morse+code) `6`
- [ ] [My smallest code interpreter (aka Brainf**k)](https://www.codewars.com/kata/search?q=My+smallest+code+interpreter+%28aka+Brainf%2A%2Ak%29) `5` jump table
- [ ] [Simple assembler interpreter](https://www.codewars.com/kata/search?q=Simple+assembler+interpreter) `5`
- [ ] [Esolang Interpreters #2 - Custom Smallfuck Interpreter](https://www.codewars.com/kata/search?q=Esolang+Interpreters+%232+Custom+Smallfuck+Interpreter) `5`
- [ ] [Decode the Morse code, advanced](https://www.codewars.com/kata/search?q=Decode+the+Morse+code%2C+advanced) `4`
- [ ] [Esolang Interpreters #3 - Custom Paintf**k Interpreter](https://www.codewars.com/kata/search?q=Esolang+Interpreters+%233+Custom+Paintf%2A%2Ak+Interpreter) `4`
- [ ] [Befunge Interpreter](https://www.codewars.com/kata/search?q=Befunge+Interpreter) `4` 2D program counter
- [ ] [Assembler interpreter (part II)](https://www.codewars.com/kata/search?q=Assembler+interpreter+%28part+II%29) `2` labels, call stack
- [ ] [Esolang Interpreters #4 - Boolfuck Interpreter](https://www.codewars.com/kata/search?q=Esolang+Interpreters+%234+Boolfuck+Interpreter) `2` bit-level tape
- [ ] [Decode the Morse code, for real](https://www.codewars.com/kata/search?q=Decode+the+Morse+code%2C+for+real) `2` clustering timing
- [ ] [Simple interactive interpreter](https://www.codewars.com/kata/search?q=Simple+interactive+interpreter) `1`
- [ ] [Tiny Three-Pass Compiler](https://www.codewars.com/kata/search?q=Tiny+Three-Pass+Compiler) `1` AST, constant folding, codegen

## Capstones

Tier 5, 2-1 kyu. Long, perf-tested puzzles. One per week is plenty. Needs: Graphs, Dynamic Programming, Big Numbers & Performance, Interpreters & Compilers.

- [ ] [Hard Sudoku Solver](https://www.codewars.com/kata/search?q=Hard+Sudoku+Solver) `2` constraint propagation + search
- [ ] [6 By 6 Skyscrapers](https://www.codewars.com/kata/search?q=6+By+6+Skyscrapers) `2`
- [ ] [7x7 Skyscrapers](https://www.codewars.com/kata/search?q=7x7+Skyscrapers) `1`
- [ ] [Mine Sweeper](https://www.codewars.com/kata/search?q=Mine+Sweeper) `1` constraint reasoning
- [ ] [Become Immortal](https://www.codewars.com/kata/search?q=Become+Immortal) `1` XOR sum by blocks
