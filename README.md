## Setup Instructions

To get started with the project, follow these steps:

### Building PostgreSQL and Accessing the Database

1. **Start the PostgreSQL container**:
    ```bash
    docker exec -it [container_id] bash
    ```

    Replace `[container_id]` with your PostgreSQL container ID.

2. **Access the PostgreSQL database**:
    ```bash
    psql -U postgres -d stream_project_db
    ```

    This will allow you to interact with the `stream_project_db` database using the `postgres` user.
