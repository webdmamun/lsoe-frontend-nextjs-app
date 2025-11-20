#!/bin/bash

echo "🔄 Converting components to Next.js format..."

# Find all .js files in components directory
find src/components -name "*.js" -type f | while read file; do
    echo "Processing: $file"
    
    # Check if file uses React Router
    if grep -q "react-router-dom" "$file"; then
        # Add 'use client' if not already present and file uses hooks or interactivity
        if ! grep -q "'use client'" "$file"; then
            if grep -qE "(useState|useEffect|onClick|onChange|onSubmit)" "$file"; then
                # Add 'use client' at the beginning after imports
                sed -i '' "1i\\
'use client';\\
" "$file"
            fi
        fi
        
        # Replace React Router imports with Next.js
        sed -i '' 's/import { Link, NavLink } from "react-router-dom"/import Link from "next\/link"/g' "$file"
        sed -i '' 's/import { Link } from "react-router-dom"/import Link from "next\/link"/g' "$file"
        sed -i '' 's/import { NavLink } from "react-router-dom"/import Link from "next\/link"/g' "$file"
        
        # Replace NavLink with Link
        sed -i '' 's/<NavLink/<Link/g' "$file"
        sed -i '' 's/<\/NavLink>/<\/Link>/g' "$file"
        
        # Replace 'to=' with 'href='
        sed -i '' 's/ to=/ href=/g' "$file"
    fi
    
    # Add 'use client' to files with hooks
    if ! grep -q "'use client'" "$file"; then
        if grep -qE "(useState|useEffect|useRef|useContext|useReducer|useCallback|useMemo)" "$file"; then
            sed -i '' "1i\\
'use client';\\
" "$file"
        fi
    fi
    
    # Add 'use client' to files with event handlers
    if ! grep -q "'use client'" "$file"; then
        if grep -qE "(onClick|onChange|onSubmit|onFocus|onBlur|onKeyDown|onKeyUp)" "$file"; then
            sed -i '' "1i\\
'use client';\\
" "$file"
        fi
    fi
    
    # Update relative imports to use @ alias where appropriate
    sed -i '' 's|from "\.\./\.\./\.\./components/|from "@/components/|g' "$file"
    sed -i '' 's|from "\.\./\.\./components/|from "@/components/|g' "$file"
    sed -i '' 's|from "\.\./components/|from "@/components/|g' "$file"
    sed -i '' 's|from "\.\./\.\./\.\./lib/|from "@/lib/|g' "$file"
    sed -i '' 's|from "\.\./\.\./lib/|from "@/lib/|g' "$file"
    sed -i '' 's|from "\.\./lib/|from "@/lib/|g' "$file"
done

echo "✅ Component conversion complete!"
