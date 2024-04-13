#!/bin/zsh

echo "Starting the Development Environment."
# Define the Variables
svelte_dir="client"

# Move into the child directory
echo "Switching to the Client to start Svelte Kit App."
cd "$svelte_dir" || exit

# Start the Svelte Kit project
echo "Starting Catholic Momma Mouse."
yarn run dev -- --host 0.0.0.0
