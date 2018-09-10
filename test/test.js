import '../src/components/ToyApp';
import ToyApp from '../src/components/ToyApp';

let apiArray;

beforeEach(function() {
  const promise = new ToyApp().getSequence(5);
  promise.then(apiData => {
    apiArray = apiData;
  }).catch(err => {
    console.log(err.statusText);
  });
});

describe('#length', function() {
  it('respond with matching records', function() {
    return apiArray.should.eventually.have.length(5);
  });
});