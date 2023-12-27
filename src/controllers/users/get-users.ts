
export async function getUsers(req :any, res: any) {
  try {
    res.status(200).json("users")
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}
