import ToyApp from '../src/components/ToyApp';

describe('ToyApp', function() {
  let apiArray;

  beforeEach(function() {
    const promise = new ToyApp().getSequence(5);
    promise.then(apiData => {
      apiArray = apiData;
    }).catch(err => {
      console.log(err.statusText);
    });
  });

  it('respond with matching number of number records', function() {
    return apiArray.should.eventually.have.length(5);
  });
});