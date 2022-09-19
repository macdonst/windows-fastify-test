export async function get (req) {
    const fruits = ['apple', 'banana', 'pear']
    return {
      json: { fruits }
    }
  }