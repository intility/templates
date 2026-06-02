# Intility .NET Templates

This is the home for the .NET templates.
The `intilityapi` template is based on the official ASP.NET template.

## Test

To test the templates locally, run the following (replace X.X.X with the `PackageVersion` field in `Intility.Templates.csproj`):

```
dotnet pack -c Release
dotnet new --install bin/Release/Intility.Templates.X.X.X.nupkg
```

You can now test the templates locally by running:

```
dotnet new intilityapi -o MyApi
```

## Release

Releases are automated with [release-please](https://github.com/googleapis/release-please) based on [Conventional Commits](https://www.conventionalcommits.org/). Do not bump `PackageVersion` or create tags manually.

- Land changes to `dotnet/` on `main` using conventional commit messages (`fix:` → patch, `feat:` → minor, `feat!:`/`BREAKING CHANGE` → major).
- release-please opens (and keeps updated) a release PR that bumps `PackageVersion` in `Intility.Templates.csproj` and the changelog.
- Merging the release PR creates the `dotnet-vX.X.X` tag and GitHub release, then automatically dispatches the publish workflow that pushes the package to NuGet.
