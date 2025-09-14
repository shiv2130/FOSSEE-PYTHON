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


## Reasoning

## 1.What design principles guided my improvement?

Well I focused on the whitespaces which means that I can use every empty spaces in some or other way and it doesn't get wasted and also I think of making the website a bit more clean and minimal which can help the user to get the guide easily and they can navigate through the website easily. I also tried adding a glassy and transparent touch in the website which makes it look beautiful to the user . Also I tried to balance out the contrast the light-dark theme of the website so that the user didn't get confused while navigating . Also priorities few things like the dashboard, workshop accepted sections where the user can navigate easily because it's design in a bold and clean manner. 

Overall I tried to keep the website's UI/UX as much simple as I could and also tried to keep it neat and clean which do not make it look cluttered and make it easy for the user to navigate through.

## 2.How did you ensure responsiveness across devices?

Well, to ensure the responsiveness of the website across devices I redesign the whole css again in the **base2.css** and tried to make the page look responsive with the help of **CSS** and **JAVASCRIPT** . I added a **hamburger-menu** which makes the website look more clean on other smaller devices and makes the user easy access of it. Also tried to keep every single page as much responsive as I could. To make it much easier I shifted the whole navigation bar of the website to the side which makes the website look much ideal and good. I **sidebar** with a glassy touch makes the website look much beautiful. I also used **flexible layouts** like **flex-box** to adjust the proper gappings between the items of the website and also used the relative measuring with the help of **Relative Units(rem)**

## 3.What trade-offs did you make between the design and performance?

I tried to made up few trade-Offs in the project which is the **fonts** , the **colour-design/theme** of the project and also adjusting the contents of the **navigation-bar** and coming up with the idea of kepping a **sidebar** instead but also at the same time the **responsiveness** of the site was also a **challenge** but I overcome that by using the **hamburger-menu** and also **designed** the **css** of each and every page specifically for their **respective pages** to **improve the design**.

## 4.What was the most challenging part of the task and how did you approach it?

The challenging part of the task was to make the site **responsive** and also trying to build a **minimal site** with a good touch of beauty and also to make it a **clean** one so that the user can navigate through the site without any issues and also figuring out the **admin side** and the **instructor/co-ordinator side** of the website and **designing the two sides simultaneously**, although I love the journey of designing this site because without any challenge it's unable to achieve the goals and I also being a **2nd-Year Student** I learned how I can work upon these kind of pre-made projects and can make changes in it. 


## Comparision of Prev Vs Old version
## Old Version of Workshop-Status Page
<img src="assets/Screenshot 2025-09-14 at 3.26.30 PM.png" width="400"/>

## New Version of Workshop-Status Page
<img src = "assets/Screenshot 2025-09-14 at 4.00.53 PM.png" width = "400"/>

## Old Version of Workshop-Details Page
<img src = "assets/Screenshot 2025-09-14 at 3.48.36 PM.png" width = "400"/>

## New Version of Workshop-Details Page
<img src = "assets/Screenshot 2025-09-14 at 3.46.27 PM.png" width = "400"/>

