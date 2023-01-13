async function globalTearDown() {
  await (global as any).mongoTestDB.close();
}
export default globalTearDown;
