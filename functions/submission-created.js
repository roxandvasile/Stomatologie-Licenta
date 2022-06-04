const fetch = require("node-fetch");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { name, surname, email, phoneNumber, message } = body.payload.data;

  const response = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_API_SECRET}`,
    },
    body: JSON.stringify({
      query: `
        mutation($name: String!, $surname: String!, $email: String!, $phoneNumber: String!, $message: String!) {
            createEntry(data: { name: $name, surname: $surname, email: $email, phoneNumber: $phoneNumber, message: $message } {
            _id
            name
            surname
            email
            phoneNumber
            message
          }
        }      
      `,
      variables: {
        name,
        surname,
        email,
        phoneNumber,
        message,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 302,
    headers: {
      Location: "preturi.html",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({}),
  };
};
