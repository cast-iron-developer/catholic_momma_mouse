# Maggie's Faith Meets Fantasy

## Built Using

- Sveltekit
- TailwindCSS
- DaisyUI
- Image Compression done with: [Squoosh](https://squoosh.app)

## Running the Application:

- Development:

  ```bash
    npm install || pnpm install || yarn install
    npm run dev

    # or start the server and open the app in a new browser tab
    npm run dev -- --open
  ```

- Building:
  ```bash
    # To create a production version of your app
    npm run build
  ```
- Preview:
  ```bash
    # To preview the production build of the site
    npm run preview
  ```

## Deployment Environment

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.


# DB Set up 
To push local Database schema run:
```
yarn run db:push
```

## Notes for development
- [Managing Different Environments with Supabase](https://supabase.com/docs/guides/deployment/managing-environments?queryGroups=environment&environment=production)
- [Supabase Local Dev](https://supabase.com/docs/guides/local-development/overview)
```shell
  # Create local DB
  npx supabase init
  
  # you will need to enter your DB password here
  npx supabase link
  
  # start local instance
  npx supabase start
  
  #in a browser navigate to http://localhost:54323/project/default
  
  # shut down local 
  npx supabase stop
  
  # DB migration to update local schema
  npx supabase db diff --use-migra initial_schema -f initial_schema
  
  # initial_schema if first run; other wise target table specifically for updates.
  npx supabase db diff --use-migra user_table -f user_table
  

```