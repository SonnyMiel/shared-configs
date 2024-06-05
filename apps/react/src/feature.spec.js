jest.retryTimes(3); // Noncompliant

describe('API.foo()', function() {
  it('should return 5 when computing ...', function() {
    doSomethingUnstable();
  });
});

