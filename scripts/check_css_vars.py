#!/usr/bin/env python3
"""
check_css_vars.py
Ensures every CSS var() used across all CSS files is defined
in variables.css. Fails with exit code 1 if any are missing.
"""
import sys, re, os, glob

css_dir = os.path.join(os.path.dirname(__file__), '..', 'css')

# Read variables.css
vars_file = os.path.join(css_dir, 'variables.css')
with open(vars_file) as f:
    vars_src = f.read()

defined = set(re.findall(r'--([\w-]+)\s*:', vars_src))

# Scan all CSS files for usages
all_css = glob.glob(os.path.join(css_dir, '*.css'))
used    = set()
for path in all_css:
    with open(path) as f:
        used |= set(re.findall(r'var\(--([\w-]+)\)', f.read()))

undefined = used - defined
if undefined:
    print(f'  FAIL  Undefined CSS variables: {sorted(undefined)}')
    sys.exit(1)

print(f'  pass  All {len(used)} CSS variables defined ({len(defined)} in variables.css)')
