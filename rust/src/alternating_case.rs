/*
    8 kyu
    altERnaTIng cAsE <=> ALTerNAtiNG CaSe
    https://www.codewars.com/kata/5899904a3e4df800b1000132/train/rust
    Define a function to_alternating_case such that each lowercase letter
    becomes uppercase and each uppercase letter becomes lowercase.
*/

fn to_alternating_case(s: &str) -> String {
    let mut result = String::new();
    s.chars()
        .flat_map(|c: char| {
            if c.is_uppercase() {
                c.to_lowercase()
            } else {
                c.to_uppercase()
            }
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn example_tests() {
        assert_eq!("HELLO WORLD", to_alternating_case("hello world"));
        assert_eq!("hello world", to_alternating_case("HELLO WORLD"));
        assert_eq!("HELLO world", to_alternating_case("hello WORLD"));
        assert_eq!("hEllO wOrld", to_alternating_case("HeLLo WoRLD"));
        assert_eq!(
            "Hello World",
            to_alternating_case(&to_alternating_case("Hello World")[..])
        );
        assert_eq!("12345", to_alternating_case("12345"));
        assert_eq!("1A2B3C4D5E", to_alternating_case("1a2b3c4d5e"));
        assert_eq!(
            "sTRING.tOaLTERNATINGcASE",
            to_alternating_case("String.ToAlternatingCase")
        );
    }
}
