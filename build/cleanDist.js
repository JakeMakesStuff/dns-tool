/*
Copyright 2019 DigitalOcean

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const fs = require("fs")
const rmfr = require("rmfr")

const main = () => {
    console.log('Cleaning out dist directory...')

    // Create target directory
    const base = `${__dirname}/../dist`
    if (!fs.existsSync(base)) {
        fs.mkdirSync(base)
    }

    // Remove all existing files
    rmfr(base)
        .then(() => console.log('...dist directory cleaned for build.'))
        .catch(e => {
            console.log(e)
            process.exit(1)
        })
}

main()
