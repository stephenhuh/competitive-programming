class Solution {
public:
int countComponents(int n, vector<pair<int, int> >& edges) {
    if (edges.empty()) return n;
	vector<bool>visited(n); //bool visited[SIZE] array works too.
	//initialize
	for (int i = 0; i < n; i++){
		visited[i] = false;
	}
	std::queue<int> Q;
	Q.push(0);
	
	int res = 0;
	for (int i = 0; i < n; i++){
		if (visited[i] == true) continue;
		//BFS
		while (!Q.empty()){
		if (visited[i] == true) break;
			res++;
			int s = Q.front();
			visited[i] = true; //set to visited
			Q.pop();
			//now search for connected
			for (i = 0; i < n; i ++){
				if (edges[i].first == s) Q.push(edges[i].second);
				if (edges[i].second == s) Q.push(edges[i].first);
			}
		}
	}
	return res;
}

};
