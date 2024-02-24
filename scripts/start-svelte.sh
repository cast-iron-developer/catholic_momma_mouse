#!/bin/zsh

echo "Starting the Development Environment."
# Define the Variables
svelte_dir="client"
sanity_dir="server"

# Move into the child directory
echo "Switching to the Client to start Svelte Kit App."
cd "$svelte_dir" || exit

# Start the Svelte Kit project
echo "Starting Catholic Momma Mouse."
npm run dev

# Move back to the parent directory
echo "Switching to the Server to start Sanity Studio CMS."
cd ../ || exit

# Move into the sibling directory
cd "$sanity_dir" || exit

# Start the Sanity.io project
echo "Starting Catholic Momma Mouse Sanity Studio CMS."
npm run dev

echo "Returning to Root."
cd ../ || exit
