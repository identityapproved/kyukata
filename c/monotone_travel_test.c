#include <criterion/criterion.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdio.h>

bool is_monotone(size_t n, const double heights[n]);
void tester(size_t n, const double heights[n], bool expected);

Test(Sample_Tests, constant) {
    const double heights[7] = {5, 5, 5, 5, 5, 5, 5};
    tester(7, heights, true);
}
Test(Sample_Tests, decreasing) {
    const double heights[5] = {5, 4, 3, 2, 1};
    tester(5, heights, false);
}
Test(Sample_Tests, increasing) {
    const double heights[2] = {1, 11};
    tester(2, heights, true);
}
Test(Sample_Tests, mixed) {
    const double heights[7] = {5, 10, 0, 1, -40, 42, -1};
    tester(7, heights, false);
}
Test(Sample_Tests, singleton) {
    const double heights[1] = {1};
    tester(1, heights, true);
}

void tester(size_t n, const double heights[n], bool exp) {
    bool sub = is_monotone(n, heights);
    if(sub != exp) {
        char arr_str[n * 10 + 1];
        size_t j = 0;
        size_t pos = sprintf(arr_str, "{");
        while(j < n) {
            pos += sprintf(arr_str + pos, "%g, ", heights[j++]);
        }
        sprintf(arr_str + pos - 2, "}");
        cr_assert_fail(
            "heights = %s\n \nSubmitted: %s\n \nExpected:  %s\n \n",
            arr_str, sub ? "true" : "false", exp ? "true" : "false"
        );
    }
    cr_assert(1);
}
