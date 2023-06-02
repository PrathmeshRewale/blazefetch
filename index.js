class BlazeFetch {
  constructor() {
    // You can include any necessary configurations here
  }

  async get(url, config) {
    const response = await fetch(url, {
      method: 'GET',
      ...config
    });
    return await response.json();
  }

  async post(url, data, config) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers
      },
      ...config
    });
    return await response.json();
  }

  async put(url, data, config) {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers
      },
      ...config
    });
    return await response.json();
  }

  async patch(url, data, config) {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers
      },
      ...config
    });
    return await response.json();
  }

  async delete(url, config) {
    const response = await fetch(url, {
      method: 'DELETE',
      ...config
    });
    return await response.json();
  }
}

module.exports = new BlazeFetch();