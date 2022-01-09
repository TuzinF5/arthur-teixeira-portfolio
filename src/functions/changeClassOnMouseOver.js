export default function changeClassOnMouseOver({ target }) {
  if (target.className.includes('linkedin')) {
    this.setState({ linkedinClassName: 'bx bxl-linkedin-square bx-tada' });
  } else {
    this.setState({ gitHubClassName: 'bx bxl-github bx-tada' });
  }
}
