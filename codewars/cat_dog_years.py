# 8 kyu
# Cat years, Dog years
# https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/python
import codewars_test as test


def human_years_cat_years_dog_years(h_y):
    y = (15, 24)
    return [h_y, y[h_y - 1], y[h_y - 1]] if h_y < 3 else [h_y, 24 + (h_y - 2) * 4, 24 + (h_y - 2) * 5]


# How old's my dog?
print(human_years_cat_years_dog_years(9))


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("one")
    def _():
        test.assert_equals(human_years_cat_years_dog_years(1), [1, 15, 15])

    @test.it("two")
    def _():
        test.assert_equals(human_years_cat_years_dog_years(2), [2, 24, 24])

    @test.it("ten")
    def _():
        test.assert_equals(human_years_cat_years_dog_years(10), [10, 56, 64])
