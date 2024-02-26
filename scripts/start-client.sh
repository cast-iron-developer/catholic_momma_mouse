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