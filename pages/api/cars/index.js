export default (req, res) => {
  res.statusCode = 200

  res.json([
    {
      id: 'ford',
      color: 'blue',
      image:
        'https://images.unsplash.com/photo-1551830820-330a71b99659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 'lambo',
      color: 'orange',
      image:
        'https://images.unsplash.com/photo-1522037576655-7a93ce0f4d10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 'tesla',
      color: 'white',
      image:
        'https://images.unsplash.com/photo-1591672862013-e23af7fc555f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=915&q=80',
    },
  ])
}
