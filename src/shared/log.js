module.exports = props => {
  const { emoji, label, message } = props;
  console.log(`\n${emoji}\xa0${label}\n\n${message}\n\n`);
};
