export default function toggleMenu(navId) {
  if (navId) {
    this.setState({ navId: '' });
  } else {
    this.setState({ navId: 'active' });
  }
}
