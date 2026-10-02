function fn() {
  var env = karate.env;
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  return {
    env: env,
    myVarName: 'someValue'
  };
}
