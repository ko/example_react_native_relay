/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

export class Widget {}

// Mock authenticated ID
const VIEWER_ID = 'me';

// Mock Widget data
const viewer = new Widget();
viewer.id = VIEWER_ID;
const widgetsById = {
  [VIEWER_ID]: viewer,
};

export function searchWidgets(query) {
  console.log(`query: ${query}`);

  if (query === undefined) {
    query = 'undefined';
  }
  if (query === '') {
    query = "math"
  }

  return [
    { 
      myId: 3,
      myName: "three",
    },
    {
      myId: 5,
      myName: "five",
    }
  ];
}

export function getViewer(query) {  
  console.log('getViewer()');
  return { widgets: searchWidgets(query) };
}
