Filter object could have this or similar structure:

```
{
  filters: [
    { key: string; value: string;} // (could change value to an array in future)
  ]
}
```

The Filter object passed as String argument to GraphQL query.

```
// Evaluations where vendorType is "development"
"{\"filters\":[{\"key\":\"vendorType\",\"value\":\"development\"}]}"

// Evaluations where vendorName is "Underbelly" and vendorType is "development"
"{\"filters\":[{\"key\":\"vendorName\",\"value\":\"Underbelly\"},{\"key\":\"vendorType\",\"value\":\"development\"}]}"

```

### Setup

Sample .env

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_NAME=filter_prototype
DATABASE_PASSWORD=
```

1. Create schema `npm run initdb`
1. Seed database `psql <DATABASE_NAME> < data.sql`
1. Run app `npm run dev`
