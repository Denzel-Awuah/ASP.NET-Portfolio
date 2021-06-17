// A mock function to mimic making an async request for data

//recieve the action here

//main purpose is to add a delay

export function fetchCount(page) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: page }), 600)
  );
}
