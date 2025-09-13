# FOSSEE Workshop Booking

A Django web application for managing and booking academic workshops.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have **Python (3.8+)** and **Git** installed on your system.

### Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shiv2130/FOSSEE-PYTHON.git
    cd workshop_booking
    ```

2.  **Create and activate a virtual environment:**
    This keeps your project dependencies isolated.

      * On macOS/Linux:
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
      * On Windows:
        ```bash
        python -m venv venv
        .\\venv\\Scripts\\activate
        ```

3.  **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up your environment variables:**
    The project uses a `.env` file for secrets. Copy the example file to create your own.

    ```bash
    cp .env.example .env
    ```

    Now, open the `.env` file and add your own `SECRET_KEY`.

5.  **Run the database migrations:**
    This will set up your local SQLite database and create the necessary tables.

    ```bash
    python manage.py migrate
    ```

6.  **Create a superuser (optional):**
    This allows you to access the Django admin dashboard.

    ```bash
    python manage.py createsuperuser
    ```

    Follow the prompts to create your admin account.

-----

## Running the Development Server

Once the setup is complete, you can start the local server.

```bash
python manage.py runserver
```

The site will be running at **`http://127.0.0.1:8000/workshop`**. The admin panel is available at `/admin`.