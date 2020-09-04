module.exports = {
    onPreBuild: ({utils}) => {
      const {git} = utils;
      const {SH, CONTEXT} = process.env
      console.log("git", git.commits);
      console.log('Hello world from onPreBuild event!');
      console.log("shhh", SH);
      console.log("context", CONTEXT);
    },
  }