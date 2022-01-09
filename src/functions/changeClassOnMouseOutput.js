export default function changeClassOnMouseOutput({ target }) {
  if (target.className.includes('linkedin')) {
    this.setState({ linkedinClassName: 'bx bxl-linkedin-square' });
  } else {
    this.setState({ gitHubClassName: 'bx bxl-github' });
  }
}
