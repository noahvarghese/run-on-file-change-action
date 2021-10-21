# Run On File Change Action

## About

Executes a step based on whether or not files have changed since the previous commit

## Inputs

### `command`

**Required** The command to execute if files have changed

### `files`

**Required** Array of partial strings to check whether any of the changed files matches against

## Example usage

```bash
uses: actions/run-on-file-change-action@v1
with:
    command: "npm run test:jest"
    files: '["src/models", "test/jest", "test/sample_data/models", "database/"]'
```
