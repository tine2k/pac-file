function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.twinformatics.at")
			|| shExpMatch(host, "*.corpnet.at")
			|| shExpMatch(host, "192.168.41.11")
			|| dnsDomainIs(host, "corpnet.at")
			|| shExpMatch(host, "*.sap.wst")
			|| shExpMatch(host, "*.viennainsurancegroup.com")
			|| shExpMatch(host, "*.vig.com")
		) {
		return "PROXY proxy:808";
	}

	return "DIRECT";
}
