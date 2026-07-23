# usage: make <kata>        builds <kata>.c into bin/<kata>
#        make run K=<kata>   builds and runs it
#        make test K=<kata>  builds <kata>.c + <kata>_test.c with Criterion and runs the tests
CC      = gcc
CFLAGS  = -std=c17 -Wall -Wextra -g

%: %.c | bin
	$(CC) $(CFLAGS) $< -o bin/$@

%_test: %_test.c %.c | bin
	$(CC) $(CFLAGS) $^ -o bin/$@ -lcriterion

run: $(K)
	./bin/$(K)

test: $(K)_test
	./bin/$(K)_test

bin:
	mkdir -p bin

clean:
	rm -rf bin
